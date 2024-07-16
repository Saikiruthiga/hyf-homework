-- Active: 1719747058156@@127.0.0.1@3306@testdatabase

-- Class exercises
-- Queries
-- 1. Get all the tasks assigned to Pavel;
select user.name as user_name, task.title as task, status.name as status
from user
    join task on user.id = task.user_id
    join status on status.id = task.status_id
where
    user.name like '%pavel%';
-- 2. Find how many tasks each user is responsible for;
select user.name as user_name, count(task.id) as task_count
from user
    join task on user.id = task.user_id
GROUP BY
    user.name;
-- 3. Find how many tasks with a status=Done each user is responsible for;
select count(task.id) as task_count, status.name
from task
    join status on task.status_id = status.id
where
    status.name = 'done';

-- Creating Database for the ERD
create database blog;

use blog;

create table authors (
    id int PRIMARY key AUTO_INCREMENT,
    name varchar(100) not null
);

alter table authors AUTO_INCREMENT = 1;

insert into
    authors (name)
values ('James Smith'),
    ('Jane Jones'),
    ('Aliya Awad'),
    ('Igor Vladimir'),
    ('Kim Jensen');

create table articles (
    id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    content varchar(255) not null
);

alter table articles AUTO_INCREMENT = 1;

insert into
    articles (title, content)
values (
        "BREAKING NEWS: Water is wet!",
        "Scientists have discovered that water is wet, it's amazing what.... ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ),
    (
        "Heavy Snowfall Expected this Weekend",
        "Lots of snow is expected... Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ),
    (
        "BREAKING NEWS: These 10 Clickbait Titles Are Bad for Your Health, Number 7 Will SHOCK You!",
        "Haha, you clicked! Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat "
    );

create table tags (
    id int PRIMARY key,
    name VARCHAR(50) not null
);

insert into
    tags (id, name)
values (1, 'science'),
    (2, 'breaking'),
    (3, 'weather'),
    (4, 'winter'),
    (5, 'clickbait');

create table author_article (
    author_id int not NULL,
    article_id int not null,
    constraint author_id_fk Foreign Key (author_id) REFERENCES authors (id),
    constraint article_id_fk Foreign Key (article_id) REFERENCES articles (id)
);

alter table author_article
add constraint primary key (author_id, article_id);

insert into
    author_article
values (1, 1),
    (2, 1),
    (3, 2),
    (4, 2),
    (2, 3),
    (5, 3);

create table article_tag (
    article_id int NOT NULL,
    tag_id int NOT null,
    constraint article_id_tag_fk Foreign Key (article_id) REFERENCES articles (id),
    constraint tag_id_fk Foreign Key (tag_id) REFERENCES tags (id)
);

alter table article_tag
add constraint primary key (article_id, tag_id);

insert into
    article_tag
values (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (3, 2);

-- Homework tasks for week2
-- Part 1: Working with tasks
--  a) Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
values (
        'Studying',
        'Complete the week3 database preparation',
        '2024-07-08 00:23:58',
        '2024-07-10 12:00:25',
        '2025-07-08 00:00:23',
        1,
        1
    );
-- b) Change the title of a task
update task set title = 'Learning' where id = 36;
-- c) Change a task due date
update task
set
    due_date = '2024-12-12 00:02:23'
where
    id = 36;
-- d) Change a task status
update task set status_id = 2 where id = 36;
-- e) Mark a task as complete
update task set status_id = 3 where id = 36;
-- f) Delete a task
delete from task where id = 36;

/* Part 2: School database
Create a new database containing the following tables:
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key) */

create database school_1;

use school_1;

create table class (
    id int PRIMARY key AUTO_INCREMENT,
    name varchar(50),
    begin_date DATE,
    end_date DATE
);

create table student_1 (
    id int PRIMARY key AUTO_INCREMENT,
    name varchar(50),
    email varchar(100),
    phone int(10),
    class_id int,
    constraint class_id_fk Foreign Key (class_id) REFERENCES class (id)
);
/* If you are done with the above tasks, you can continue with these advanced tasks:
Create an index on the name column of the student table.
Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations) */
create index name_index on student_1 (name);

alter table class
add COLUMN status ENUM(
    'not-started',
    'ongoing',
    'finished'
);
-- Inserting values into the tables class and student_1
insert into
    class
values (
        1,
        'John',
        '2024-01-01',
        '2025-01-01',
        'ongoing'
    ),
    (
        2,
        'James',
        '2023-01-01',
        '2024-01-01',
        'finished'
    );

update class set name = 'Maths' where id = 1;

update class set name = 'physics' where id = 2;

insert into
    student_1
values (
        1,
        'John',
        'john_01@gmail.com',
        '246810235',
        1
    );

insert into
    student_1
values (
        2,
        'James',
        'James_01@gmail.com',
        '2536985',
        2
    );

insert into
    student_1
values (
        3,
        'Smith',
        'smith_01@gmail.com',
        '136856985',
        2
    );
-- Part 3: More queries
use testdatabase;

CREATE TABLE `user_task` (
    `user_id` int(10) unsigned NOT NULL,
    `task_id` int(10) unsigned NOT NULL,
    PRIMARY KEY (`user_id`, `task_id`),
    CONSTRAINT `fk_user_task_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_user_task_task` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

insert into user_task (user_id, task_id) values (1, 5);

insert into user_task (user_id, task_id) values (1, 35);

insert into user_task (user_id, task_id) values (1, 11);

insert into user_task (user_id, task_id) values (2, 4);

insert into user_task (user_id, task_id) values (2, 26);

insert into user_task (user_id, task_id) values (2, 29);

insert into user_task (user_id, task_id) values (3, 22);

insert into user_task (user_id, task_id) values (3, 13);

insert into user_task (user_id, task_id) values (3, 19);

insert into user_task (user_id, task_id) values (4, 24);

insert into user_task (user_id, task_id) values (4, 20);

insert into user_task (user_id, task_id) values (5, 20);

insert into user_task (user_id, task_id) values (5, 18);

insert into user_task (user_id, task_id) values (5, 15);

insert into user_task (user_id, task_id) values (6, 10);

insert into user_task (user_id, task_id) values (6, 7);

insert into user_task (user_id, task_id) values (6, 27);

insert into user_task (user_id, task_id) values (7, 33);

insert into user_task (user_id, task_id) values (7, 18);

insert into user_task (user_id, task_id) values (7, 23);

insert into user_task (user_id, task_id) values (8, 26);

insert into user_task (user_id, task_id) values (8, 30);

insert into user_task (user_id, task_id) values (8, 11);

insert into user_task (user_id, task_id) values (9, 34);

insert into user_task (user_id, task_id) values (9, 15);

insert into user_task (user_id, task_id) values (9, 1);

insert into user_task (user_id, task_id) values (10, 29);

insert into user_task (user_id, task_id) values (10, 16);

insert into user_task (user_id, task_id) values (10, 1);

insert into user_task (user_id, task_id) values (11, 26);

insert into user_task (user_id, task_id) values (11, 27);

insert into user_task (user_id, task_id) values (11, 17);

insert into user_task (user_id, task_id) values (11, 2);

insert into user_task (user_id, task_id) values (1, 3);

insert into user_task (user_id, task_id) values (2, 6);

insert into user_task (user_id, task_id) values (3, 8);

insert into user_task (user_id, task_id) values (4, 9);

insert into user_task (user_id, task_id) values (5, 12);

insert into user_task (user_id, task_id) values (6, 14);

insert into user_task (user_id, task_id) values (7, 21);

insert into user_task (user_id, task_id) values (8, 25);

insert into user_task (user_id, task_id) values (9, 28);

insert into user_task (user_id, task_id) values (10, 31);

insert into user_task (user_id, task_id) values (11, 32);

-- Get all the tasks assigned to users whose email ends in @spotify.com
select task.title as Task, user.name as Name, user.email as email
from task
    join user_task on task.id = user_task.task_id
    join user on user_task.user_id = user.id
where
    user.email like '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
select task.title as task, user.name as name, status.name as status
from
    task
    join user_task on task.id = user_task.task_id
    join user on user_task.user_id = user.id
    join status on task.status_id = status.id
where
    user.name = 'Donald Duck'
    and status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select task.title as task, user.name as name, task.created as month
from task
    join user_task on task.id = user_task.task_id
    join user on user.id = user_task.user_id
where
    user.name = 'Maryrose Meadows'
    and MONTH(created) = '09';

/*Find how many tasks where created in each month, e.g. how many tasks were created in october, 
how many tasks were created in november, etc. (hint: use group by) */

select count(*) as task_count, MONTH(created) as month
from task
GROUP BY
    MONTH(created);

-- Part 4: Creating a database
create database restuarant;

use restuarant;

create table menu (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(45),
    price DECIMAL(6, 2)
);

insert into
    menu
values (1, 'pasta', 50.00),
    (2, 'Pizza', 150.50),
    (3, 'Burger', 100.80);

CREATE TABLE customer (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(50),
    address varchar(100),
    email varchar(100),
    phone int(10)
);

alter table customer AUTO_INCREMENT = 1;

insert into
    customer (name, address, email, phone)
values (
        'John',
        '3 1th valby maskinfabriksvej valby',
        'john_01@gmail.com',
        235698
    ),
    (
        'James',
        '2 1th valby maskinfabriksvej valby',
        'james_01@gmail.com',
        23236588
    ),
    (
        'Smith',
        '1 1th valby peterdepodensvej valby',
        'smith_01@gmail.com',
        258963147
    );

CREATE TABLE `order` (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    total_amount decimal(6, 2),
    date DATE,
    cust_id int,
    constraint cust_id_fk Foreign Key (cust_id) REFERENCES customer (id)
);

insert into
    `order`
values (1, 200.00, '2014-03-12', 2),
    (2, 150.00, '2014-03-13', 1),
    (3, 50.00, '2014-03-12', 3);

create table menu_cust (
    menu_id int,
    cust_id int,
    primary key (menu_id, cust_id),
    constraint menu_cust_fk Foreign Key (cust_id) REFERENCES customer (id),
    constraint menu_id_fk Foreign Key (menu_id) REFERENCES menu (id)
);

insert into menu_cust values (1, 2), (1, 3), (2, 2), (3, 2);

create table menu_order (
    menu_id int,
    order_id int,
    primary key (menu_id, order_id),
    constraint menu_order_fk Foreign Key (menu_id) REFERENCES menu (id),
    constraint order_id_fk Foreign Key (order_id) REFERENCES `order` (id)
);

insert into menu_order values (1, 2), (1, 1), (1, 3), (3, 3);

use restuarant;

drop table menu_cust;