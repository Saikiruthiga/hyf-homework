-- Active: 1719747058156@@127.0.0.1@3306@testdatabase
-- 1.Find out how many tasks are in the task table
select count(id) as task_count from task;
--2.Find out how many tasks in the task table do not have a valid due date
select count(id) from task where due_date is null;
--3.Find all the tasks that are marked as done
select t.id, t.title, s.name
from task t
    join status s on t.status_id = s.id
where
    s.name = 'done';
--4.Find all the tasks that are not marked as done
select t.id, t.title, s.name
from task t
    join status s on t.status_id = s.id
where
    s.name != 'done';
--5.Get all the tasks, sorted with the most recently created first
select * from task ORDER BY created DESC;
--6.Get the single most recently created task
select * from task ORDER BY created DESC limit 1;
--7.Get the title and due date of all tasks where the title or description contains database
select title, due_date
from task
where
    title like '%database%'
    or description like '%database%';
--8.Get the title and status (as text) of all tasks
select t.title, s.name as status
from task t
    join status s on t.status_id = s.id;
--9.Get the name of each status, along with a count of how many tasks have that status
select s.name as status, count(t.id) as task_count
from status s
    join task t on s.id = t.status_id
GROUP BY
    s.name;
--10.Get the names of all statuses, sorted by the status with most tasks first
select status, task_count
from (
        select s.name as status, count(t.id) as task_count
        from status s
            join task t on s.id = t.status_id
        GROUP BY
            s.name
    ) As subquery
ORDER BY task_count desc;