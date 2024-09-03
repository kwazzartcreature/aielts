import os
from dotenv import load_dotenv

from string import punctuation
import pandas as pd
from pocketbase import PocketBase


def init():
    load_dotenv()

    CONNECTION_STRING = os.getenv('POCKETBASE_CONNECTION_STRING')
    ADMIN_EMAIL = os.getenv('POCKETBASE_ADMIN_EMAIL')
    ADMIN_PASSWORD = os.getenv('POCKETBASE_ADMIN_PASSWORD')

    pb = PocketBase(CONNECTION_STRING)

    pb.admins.auth_with_password(ADMIN_EMAIL, ADMIN_PASSWORD)
    return pb


def seed_themes(pb: PocketBase):
    themes = pd.read_csv('./data/THEME.csv', delimiter=';',
                         quotechar='"')

    for _, row in themes.iterrows():
        themeName = row["name"].strip()

        themeNameLower = themeName.lower()
        words = themeNameLower.split(" ")
        for index, word in enumerate(words):
            words[index] = "".join(
                [ch for ch in word if ch not in punctuation + "’"])

        words = list(filter(lambda w: len(w.strip()) > 0, words))
        themeSlug = "-".join(words)

        newTheme = pb.collection('theme').create(
            {'name': themeName, 'slug': themeSlug})

        newVocabulary = pb.collection('vocabulary').create(
            {'content': f'<h1>{themeName}</h1>', 'theme': newTheme.id})

        pb.collection('theme').update(
            newTheme.id, {'vocabulary': newVocabulary.id})


def seed_tasks(pb: PocketBase):
    tasks = pd.read_csv('./data/TASK.csv', delimiter=';',
                        quotechar='"')

    for _, row in tasks.iterrows():
        examType = row['examType']
        section = row['section']
        name = row['name']
        themeName = row['themeName']
        questions = row['questions'].strip().split('\n')
        part = int(row['part'])

        if part == 2:
            questions = ["?".join(questions)]

        theme = pb.collection('theme').get_first_list_item(
            f"name='{themeName}'")

        taskName = name.lower()
        words = taskName.split(" ")
        for index, word in enumerate(words):
            words[index] = "".join(
                [ch for ch in word if ch not in punctuation + "’"])
        words = list(filter(lambda w: len(w.strip()) > 0, words))
        taskSlug = "-".join(words)

        questionsIds = []
        for index, question in enumerate(questions):
            questionsIds.append(pb.collection(
                'question').create({'order': index, 'content': question}).id)

        pb.collection('task').create(
            {'examType': examType,
             'section': section,
             'part': part,
             'snippet': name,
             'slug': taskSlug,
             'questions': questionsIds,
             'theme': theme.id
             })


if __name__ == "__main__":
    pb = init()
    # seed_themes(pb)
    # seed_tasks(pb)
