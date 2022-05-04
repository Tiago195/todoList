CREATE DATABASE IF NOT EXISTS todoList;

CREATE TABLE todoList.users (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE todoList.tasks (
    id_user INT NOT NULL,
    add_task timestamp default current_timestamp,
    task_day DATE NOT NULL,
    task VARCHAR(300) NOT NULL,
    FOREIGN KEY(id_user) REFERENCES todoList.users (id)
);

DELETE FROM todoList.users WHERE id = 4; 