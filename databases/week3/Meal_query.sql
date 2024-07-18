-- Active: 1719747058156@@127.0.0.1@3306@Meal

CREATE DATABASE Meal;

DEFAULT CHARACTER SET = 'utf8mb4';

use Meal;

CREATE TABLE meal (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(50) NOT NULL,
    `when` DATETIME NOT NULL,
    max_reservations INT NOT NULL,
    price DECIMAL NOT NULL,
    created_date DATE NOT NULL
);

insert into
    meal
values (
        1,
        'Paella',
        'Traditional Spanish rice dish made with saffron-infused rice, seafood, and/or meats.',
        'Spain',
        '2024-07-10 19:00:00',
        50,
        25.99,
        '2024-07-10'
    ),
    (
        2,
        'Sushi',
        'Japanese dish consisting of vinegared rice topped with raw fish or other ingredients.',
        'Japan',
        '2024-07-11 20:00:00',
        30,
        15.50,
        '2024-07-10'
    ),
    (
        3,
        'Hamburger',
        'Classic American sandwich consisting of a ground beef patty, often served with toppings in a bun.',
        'USA',
        '2024-07-12 18:00:00',
        40,
        12.75,
        '2024-07-10'
    ),
    (
        4,
        'Pad Thai',
        'Thai stir-fried rice noodle dish with eggs, tofu, shrimp, peanuts, and a tangy tamarind sauce.',
        'Thailand',
        '2024-07-13 19:30:00',
        35,
        10.99,
        '2024-07-10'
    ),
    (
        5,
        'Tagine',
        'Moroccan slow-cooked stew made with meat, poultry, or fish with vegetables and aromatic spices.',
        'Morocco',
        '2024-07-14 19:00:00',
        25,
        18.50,
        '2024-07-10'
    ),
    (
        6,
        'Biryani',
        'Spiced rice dish originating from the Indian subcontinent, usually mixed with meat, vegetables, or eggs.',
        'India',
        '2024-07-15 20:00:00',
        30,
        20.00,
        '2024-07-10'
    ),
    (
        7,
        'Ceviche',
        'Latin American dish of fresh raw fish or seafood marinated in citrus juices, often with onions, peppers, and cilantro.',
        'Peru',
        '2024-07-16 18:30:00',
        20,
        16.75,
        '2024-07-10'
    ),
    (
        8,
        'Pasta Carbonara',
        'Italian pasta dish made with eggs, cheese (usually Pecorino Romano), pancetta, and black pepper.',
        'Italy',
        '2024-07-17 19:00:00',
        40,
        14.99,
        '2024-07-10'
    );

CREATE TABLE reservation (
    id INT PRIMARY KEY NOT NULL,
    number_of_guests INT NOT NULL,
    meal_id INT,
    constraint meal_id_fk Foreign Key (meal_id) REFERENCES meal (id),
    created_date DATE NOT NULL,
    contact_phonenumber INT(10) NOT NULL,
    contact_name VARCHAR(50) NOT NULL,
    contact_email VARCHAR(100)
);

insert into
    reservation
values (
        1,
        5,
        3,
        '2024-03-05',
        236587,
        'John',
        'john_01@gmail.com'
    ),
    (
        2,
        4,
        2,
        '2024-07-11',
        98765432,
        'Jane Smith',
        'jane.smith@example.com'
    ),
    (
        3,
        3,
        3,
        '2024-07-12',
        55512345,
        'Alice Brown',
        'alice.brown@example.com'
    );

CREATE TABLE review (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    meal_id INT,
    constraint meal_id_fk_1 Foreign Key (meal_id) REFERENCES meal (id),
    stars INT NOT NULL,
    created_date DATE NOT NULL
);

insert into
    review
values (
        1,
        'Delicious Paella!',
        'The Paella was absolutely delicious, with perfect flavors and texture.',
        1,
        5,
        '2024-07-10'
    ),
    (
        2,
        'Great Sushi Experience',
        'The Sushi was fresh and delightful. Highly recommended!',
        2,
        4,
        '2024-07-11'
    ),
    (
        3,
        'Tasty Hamburger',
        'The Hamburger was juicy and flavorful. A satisfying meal!',
        3,
        4,
        '2024-07-12'
    );

-- Queries for Meal
-- Get all meals
select * from meal;

select meal.id as Id, meal.title as Menu from meal;
-- Add a new meal
insert into
    meal
values (
        9,
        'Lasagna',
        'It is made by layering flat pasta sheets with meat sauce, béchamel sauce, and cheese. It is baked until the pasta is tender and the cheese is melted and bubbly',
        'Italy',
        '2024-07-18 20:00:00',
        15,
        20,
        '2024-07-10'
    );

-- Get a meal with any id, fx 1
select * from meal where id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal set max_reservations = 60, price = 30 where id = 1;

-- Delete a meal with any id, fx 1
delete from meal where id = 9;

--Queries for reservation
--Get all reservations
select * from reservation;

--Add a new reservation
insert into
    reservation
values (
        4,
        2,
        2,
        '2024-07-08',
        2358755,
        'Osama Bin Laden',
        'laden_01@gmail.com'
    );

--Get a reservation with any id, fx 1
select * from reservation where id = 4;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation
set
    number_of_guests = 8,
    meal_id = 1
where
    id = 4;

--Delete a reservation with any id, fx 1
delete from reservation where id = 4;

--Queries for review
-- Get all reviews
select * from review;

--Add a new review
insert into
    review
values (
        4,
        'nasty tagine',
        'Worst tagine I ever tasted',
        5,
        1,
        '2024-06-05'
    );

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
set
    title = 'good',
    description = 'tastes good'
where
    id = 4;

-- Delete a review with any id, fx 1
delete from review where id = 4;

--Additional queries
insert into
    meal
VALUES (
        9,
        'Burger',
        ' It is made up of bun with vegtable patty and tomato sauce',
        'USA',
        '2024-07-18 20:00:03',
        50,
        20,
        '2024-07-11'
    ),
    (
        10,
        'Chenguan',
        ' It is made up of pasta with chicken patty and chilli sauce',
        'Finland',
        '2024-07-19 20:00:03',
        30,
        10,
        '2024-07-11'
    );

insert into
    reservation
values (
        4,
        3,
        9,
        '2024-07-12',
        6589745,
        'Kirm Johnson',
        'kirm@gmail.com'
    ),
    (
        5,
        2,
        10,
        '2024-07-12',
        7896542,
        'Vizhurathi',
        'viz@example.com'
    );

insert into
    review
values (
        4,
        'Bad Burger',
        'Very bad tasty burger',
        9,
        1,
        '2024-07-12'
    ),
    (
        5,
        'Good',
        'Very tasty dish',
        10,
        5,
        '2024-07-12'
    );

-- Get meals that has a price smaller than a specific price fx 90
select * from meal where price < 20;

-- Get meals that still has available reservations
select *
from meal
    left join (
        select meal_id, sum(number_of_guests) as guests
        from reservation
        group by
            meal_id
    ) as A on meal.id = A.meal_id
where
    meal.max_reservations > COALESCE(A.guests, 0);

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from meal where title like '%pasta%';

-- Get meals that has been created between two dates
select *
from meal
where
    created_date BETWEEN '2024-07-09' and '2024-07-12';

-- Get only specific number of meals fx return only 5 meals
select * from meal order by rand() limit 5;

-- Get the meals that have good reviews
select meal.id, meal.title, rev.title, rev.stars, rev.meal_id
from meal
    join (
        select *
        from review
        where
            stars > 3
    ) as rev on meal.id = rev.meal_id;

-- Get reservations for a specific meal sorted by created_date
select meal.title, A.number_of_guests, A.created_date
from meal
    join (
        select *
        from reservation
        where
            meal_id = 3
        ORDER BY created_date ASC
    ) as A on meal.id = A.meal_id;

-- Sort all meals by average number of stars in the reviews
select meal.title, avg(review.stars) as average
from meal
    join review on meal.id = review.meal_id
GROUP BY
    meal.title
order by average desc;