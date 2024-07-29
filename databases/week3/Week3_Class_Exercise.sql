-- Active: 1719747058156@@127.0.0.1@3306@Social_Media
use Social_Media;

create table User (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(20) NOT NULL,
    reg_datetime DATETIME NOT NULL
);

insert into
    User (
        name,
        email,
        password,
        reg_datetime
    )
values (
        'John Doe',
        'john.doe@example.com',
        'password123',
        '2023-01-15 10:25:45'
    ),
    (
        'Jane Smith',
        'jane.smith@example.com',
        'securePass456',
        '2023-02-20 14:30:00'
    ),
    (
        'Alice Johnson',
        'alice.johnson@example.com',
        'alicePwd789',
        '2023-03-10 09:15:30'
    ),
    (
        'Bob Brown',
        'bob.brown@example.com',
        'bobSecurePass',
        '2023-04-05 16:45:00'
    ),
    (
        'Carol White',
        'carol.white@example.com',
        'carolPass321',
        '2023-05-12 11:00:00'
    );

create table Post (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    content VARCHAR(100) NOT NULL,
    creation_datetime DATETIME not NULL,
    update_datetime DATETIME,
    user_id int,
    constraint user_id_fk Foreign Key (user_id) REFERENCES User (id)
);

insert into
    Post (
        title,
        content,
        creation_datetime,
        update_datetime,
        user_id
    )
values (
        'First Post',
        'This is the content of the first post',
        '2023-07-01 10:00:00',
        NULL,
        3
    ),
    (
        'Second Post',
        'This is the content of the second post',
        '2023-07-02 11:00:00',
        NULL,
        2
    ),
    (
        'Third Post',
        'This is the content of the third post',
        '2023-07-03 12:00:00',
        NULL,
        3
    ),
    (
        'Fourth Post',
        'This is the content of the fourth post',
        '2023-07-04 13:00:00',
        '2023-07-12 12:00:00',
        1
    ),
    (
        'Fifth Post',
        'This is the content of the fifth post',
        '2023-07-05 14:00:00',
        NULL,
        2
    );

CREATE Table Comment (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    content VARCHAR(100) NOT NULL,
    created_datetime DATETIME NOT NULL,
    update_datetime DATETIME,
    user_id int NOT NULL,
    post_id int,
    parent_comment_id int,
    constraint user_id_fk_1 Foreign Key (user_id) REFERENCES User (id),
    constraint post_id_fk Foreign Key (post_id) REFERENCES Post (id),
    constraint comment_id_fk Foreign Key (parent_comment_id) REFERENCES Comment (id)
);

insert into
    Comment (
        content,
        created_datetime,
        update_datetime,
        user_id,
        post_id,
        parent_comment_id
    )
values (
        'This is the first comment.',
        '2023-07-01 10:00:00',
        NULL,
        1,
        1,
        NULL
    ),
    (
        'This is a reply to the first comment.',
        '2023-07-01 11:00:00',
        NULL,
        2,
        1,
        1
    ),
    (
        'This is another comment.',
        '2023-07-02 09:30:00',
        NULL,
        3,
        2,
        NULL
    ),
    (
        'This is a reply to the comment.',
        '2023-07-02 10:15:00',
        NULL,
        4,
        2,
        3
    ),
    (
        'This is a reply.',
        '2023-07-02 11:45:00',
        NULL,
        5,
        2,
        4
    );

CREATE Table Reaction (
    id INT PRIMARY KEY NOT NULL PRIMARY KEY,
    type ENUM(
        'cry',
        'laugh',
        'highfive',
        'like'
    ) not NULL,
    post_id int,
    comment_id INT,
    user_id INT not NULL,
    constraint user_id_fk_2 Foreign Key (user_id) REFERENCES User (id),
    constraint post_id_fk_1 Foreign Key (post_id) REFERENCES Post (id),
    constraint comment_id_fk_1 Foreign Key (comment_id) REFERENCES Comment (id),
    constraint unique_user_type_post UNIQUE (user_id, type, post_id),
    constraint unique_user_type_comment UNIQUE (user_id, type, comment_id)
);

insert into
    Reaction (
        id,
        type,
        post_id,
        comment_id,
        user_id
    )
values (1, 'cry', 3, 2, 1),
    (2, 'highfive', 2, NULL, 3),
    (3, 'laugh', NULL, 1, 1);

create table Friendship (
    user_id_1 int NOT NULL,
    user_id_2 int not NULL,
    PRIMARY KEY (user_id_1, user_id_2),
    constraint user_id_1_fk Foreign Key (user_id_1) REFERENCES User (id),
    constraint user_id_2_fk Foreign Key (user_id_2) REFERENCES User (id),
    constraint user_id_order check (user_id_1 < user_id_2)
);

insert into `Friendship` values (1, 3), (2, 3), (1, 2);