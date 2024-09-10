import { z } from 'zod';

// Schema for user collection
export const userSchema = z.object({
	id: z.string().optional(),
	name: z.string().optional(),
	avatar: z.string().optional(), // Assuming this is a URL or file path
	generationAmount: z.number().min(0).optional(),
	subscriptionExpirationDate: z.string().optional(), // Assuming ISO date string
	subscribed: z.boolean().optional()
});

// Schema for attempt collection
export const attemptSchema = z.object({
	id: z.string().optional(),
	type: z.enum(['single_part', 'full_section']).optional(),
	section: z.enum(['writing', 'speaking']).optional(),
	user: z.string().optional(), // Relation to user collection by ID
	feedback: z.string().optional(), // Relation to feedback collection by ID
	tasks: z.array(z.string()).optional(), // Relation to tasks collection by ID
	records: z.array(z.string()).optional(), // Relation to records collection by ID
	answerEndTime: z.string().optional(), // Assuming ISO date string
	analysisEndTime: z.string().optional(), // Assuming ISO date string
	transcribeEndTime: z.string().optional() // Assuming ISO date string
});

// Schema for audio collection
export const audioSchema = z.object({
	id: z.string().optional(),
	audio: z.string().optional(), // Assuming this is a file path
	questionOffsetsString: z.string().optional()
});

// Schema for feedback collection
export const feedbackSchema = z.object({
	id: z.string().optional(),
	criterias: z.array(z.string()).optional() // Relation to feedbackCriteria collection by ID
});

// Schema for feedbackCriteria collection
export const feedbackCriteriaSchema = z.object({
	id: z.string().optional(),
	structuralReview: z.any().optional(), // Assuming this is a JSON object
	name: z
		.enum(['band', 'lexical', 'coherence', 'grammar', 'pronouncation', 'structure'])
		.optional(),
	score: z.number().min(0).max(9).optional(),
	review: z.string().optional()
});

// Schema for question collection
export const questionSchema = z.object({
	id: z.string().optional(),
	content: z.string() // Required field
});

// Schema for record collection
export const recordSchema = z.object({
	id: z.string().optional(),
	recordEndTime: z.string().optional(), // Assuming ISO date string
	task: z.string().optional(), // Relation to task collection by ID
	content: z.string().optional(),
	audio: z.string().optional() // Relation to audio collection by ID
});

// Schema for task collection
export const taskSchema = z.object({
	id: z.string().optional(),
	examType: z.enum(['general', 'academic']).optional(),
	section: z.enum(['writing', 'speaking']).optional(),
	part: z.number().min(1).max(3).optional(),
	snippet: z.string(), // Required field
	slug: z.string().optional(),
	questions: z.array(z.string()).optional() // Relation to question collection by ID
});

// Schema for theme collection
export const themeSchema = z.object({
	id: z.string().optional(),
	name: z.string().optional(),
	image: z.string().optional(), // Assuming this is a URL or file path
	slug: z.string().optional(),
	vocabulary: z.string().optional() // Relation to vocabulary collection by ID
});

// Schema for vocabulary collection
export const vocabularySchema = z.object({
	id: z.string().optional(),
	theme: z.string().optional() // Relation to theme collection by ID
});
