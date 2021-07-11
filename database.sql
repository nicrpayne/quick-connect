CREATE TABLE  "user"(
    "id" serial PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT false
);

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

CREATE TABLE "templates"(
	"template_id" serial Primary Key,
	"template_name" VARCHAR (1000) NOT NULL,
	"template_body" VARCHAR (1000) NOT NULL
);

CREATE TABLE "guests"(
	"guest_id" serial PRIMARY KEY,
	"first_name" VARCHAR (1000) NOT NULL,
	"last_name" VARCHAR (1000) NOT NULL
);

CREATE TABLE "reservation"(
	"reservation_id" serial Primary Key, 
	"room_number" VARCHAR (1000), 
	"start_time_stamp" VARCHAR (1000),
	"end_time_stamp" VARCHAR (1000)
);

ALTER TABLE guests
ADD COLUMN "reservation_id" integer REFERENCES reservation;

ALTER TABLE reservation
ADD COLUMN "guest_id" integer REFERENCES guests,
ADD COLUMN "company_id" integer REFERENCES companies;

INSERT INTO "user" ("username", "password", "admin")
VALUES ('admin', '$2a$10$fld6zZiQxdgcbVIWKAzve.g9NEEfGWHaN7/LSbshYl9R3BH/0rSbS', TRUE);

INSERT INTO "templates"("template_name", "template_body")
VALUES ('Quick Connect default', 'This is a template');

INSERT INTO "guests"("first_name", "last_name")
VALUES ('Candy', 'Pace'),
('Morgan', 'Porter'),
('Bridgett', 'Richard'),
('Melissa', 'Preston'),
('Latoya', 'Herrera'),
('Hewitt', 'Hopper');

INSERT INTO "reservation"("room_number", "start_time_stamp", "end_time_stamp", "guest_id", "company_id")
VALUES 	(529, 1486654792, 1486852373, 1, 5),
		(385, 1486612719, 1486694720, 2, 4),
		(141, 1486520344, 1486769616, 3, 3),
		(417, 14886614763, 1486832543, 4, 2),
		(194, 1486605110, 1486785126, 5, 1),
		(349, 1486660637, 1486788273, 6, 3);








