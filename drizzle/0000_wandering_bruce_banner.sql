CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"email" varchar(255) NOT NULL,
	"password" varchar NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" integer,
	CONSTRAINT "idx_users_email" UNIQUE("email")
);
