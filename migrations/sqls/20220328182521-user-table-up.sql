/* Replace with your SQL commands */
/* UP */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users_table (id uuid DEFAULT uuid_generate_v4() PRIMARY KEY, email VARCHAR(40) UNIQUE,user_name VARCHAR(50) NOT NULL, first_name VARCHAR(25) NOT NULL, last_name VARCHAR(25) NOT NULL ,password VARCHAR(255) NOT NULL);
