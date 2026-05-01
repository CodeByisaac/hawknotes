import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const documents = sqliteTable('documents', {
	id: text('id')
		.$defaultFn(() => crypto.randomUUID())
		.primaryKey(),

	userId: text('user_id')
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
	courseId: text('course_id').references(() => courses.id, { onDelete: 'set null' }),

	title: text('title').notNull(),
	originalFilename: text('original_filename').notNull(),
	mimeType: text('mime_type').notNull(),
	sizeBytes: integer('size_bytes').notNull(),
	pageCount: integer('page_count'),
	sha256: text('sha256'),

	r2Key: text('r2_key').notNull().unique(),

	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
});

export const users = sqliteTable('users', {
	id: text('id')
		.$defaultFn(() => crypto.randomUUID())
		.primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text('email').unique().notNull(),
	phone: text('phone'),

	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
});

export const courses = sqliteTable('courses', {
	id: text('id')
		.$defaultFn(() => crypto.randomUUID())
		.primaryKey(),
	name: text('name').notNull(),
	code: text('code').notNull(),
	description: text('description'),

	createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
});
