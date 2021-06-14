
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE  "user"(
    "id" serial PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT false
);

INSERT INTO "user" ("username", "password", "admin")
VALUES ('admin', '$2a$10$fld6zZiQxdgcbVIWKAzve.g9NEEfGWHaN7/LSbshYl9R3BH/0rSbS', TRUE);

CREATE TABLE "companies"(
	"id" serial PRIMARY KEY,
	"company" VARCHAR (1000) UNIQUE NOT NULL,
	"city" VARCHAR (1000) NOT NULL,
	"timezone" VARCHAR (1000)
);

INSERT INTO "companies"("company", "city", "timezone")
VALUES ('Hotel California', 'Santa Barbara', 'US/Pacific'),
('The Grand Budapest Hotel', 'Republic of Zubrowka', 'US/Central'),
('The Heartbreak Hotel', 'Graceland', 'US/Central'),
('The Prancing Pony', 'Bree', 'US/Central'),
('The Fawlty Towers', 'Torquay', 'US/Eastern');