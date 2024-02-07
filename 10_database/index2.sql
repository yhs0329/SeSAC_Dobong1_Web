CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

desc customer;

insert into customer values('aaa', '손흥민','1992-03-17');

INSERT INTO customer (id, name, birthday) 
VALUES ('bbb', '황희찬', '1997-11-01');
INSERT INTO customer (id, name, birthday) 
VALUES ('ccc', '이강인', '2001-05-31');
INSERT INTO customer (id, name, birthday) 
VALUES ('ddd', '조현우', '2001-05-31');

select * from customer;

create table orderlist(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) 
    ON UPDATE CASCADE ON DELETE CASCADE
);
-- FOREIGN KEY (현재테이블 컬럼이름fk) REFERENCES 기준테이블(기준테이블 컬럼이름pk)
-- ON UPDATE CASCADE: 기준 테이블(customer)의 데이터가 변경되면 참조 테이블(orderlist)의 데이터도 변경
-- ON DELETE CASCADE: 기준 테이블의 데이터 삭제되면 참조테이블의 데이터도 삭제됨

-- 테이블을 삭제할 때
-- fk-pk 관계로 연결된 테이블은 외래키가 설정된 테이블(orderlist)을 먼저 삭제
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

SELECT * from orderlist;

-- join
-- 1. inner join, inner join과 on 사용
select * from customer
inner join orderlist
on customer.id=orderlist.customer_id;

-- 2. , 와 where로 inner join 사용
select orderlist.id, customer.id, customer.name, orderlist.product_name
from customer, orderlist
where customer.id=orderlist.customer_id;

-- 3. inner join, on 사용, where 조건과 함께 사용
select * FROM orderlist inner join customer
on customer.id=orderlist.customer_id
where orderlist.quantity >= 5;

-- 4. table 별칭 지어서 접근
select o.id as order_id, c.id as customer_id, c.name, o.product_name
FROM customer as c, orderlist as o
where c.id = o.customer_id;

--natural JOIN
select *
from orderlist NATURAL JOIN customer;


-- outer join
select * from orderlist LEFT OUTER JOIN customer
ON customer.id=orderlist.customer_id;

select * from orderlist RIGHT OUTER JOIN customer
ON customer.id=orderlist.customer_id;

CREATE TABLE A(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(1) NOT NULL,
    age int
);

INSERT INTO A VALUES ('20115544', 'a', 34);
INSERT INTO A VALUES ('20156677', 'b', 31);
INSERT INTO A VALUES ('20227755', 'c', 25);
INSERT INTO A VALUES ('20232223', 'd', 23);
INSERT INTO A VALUES ('20201144', 'e', 23);
INSERT INTO A VALUES ('20145145', 'f', 30);
INSERT INTO A VALUES ('20180919', 'g', 26);

select * from A

CREATE TABLE B(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(1) NOT NULL,
    age int
);

INSERT INTO B VALUES ('2022091994', 'h', 29);
INSERT INTO B VALUES ('2020101021', 'i', 23);
INSERT INTO B VALUES ('2018187566', 'j', 26);

CREATE TABLE C(
    cid int AUTO_INCREMENT PRIMARY KEY,
    id VARCHAR(10),
    subject VARCHAR(10)
);

INSERT INTO C VALUES (null, '20115544', "네트워크");
INSERT INTO C VALUES (null, '20115544', "알고리즘");
INSERT INTO C VALUES (null, '20156677', "알고리즘");
INSERT INTO C VALUES (null, '20227755', "네트워크");
INSERT INTO C VALUES (null, '20232223', "C언어");
INSERT INTO C VALUES (null, '20145145', "캡스톤");
INSERT INTO C VALUES (null, '20180919', "캡스톤");
INSERT INTO C VALUES (null, '20180919', "C언어");
INSERT INTO C VALUES (null, '20180919', "네트워크");
INSERT INTO C VALUES (null, '2022091994', "C언어");
INSERT INTO C VALUES (null, '2022091994', "캡스톤");
INSERT INTO C VALUES (null, '2022091994', "웹프레임워크");
INSERT INTO C VALUES (null, '2018187566', "C언어");
INSERT INTO C VALUES (null, '2018187566', "네트워크");
INSERT INTO C VALUES (null, '2018187566', "캡스톤");

select * from C

--A대학 학생정보 X 신청과목(C) inner join (학번끼리 같을 때)
select * from A
INNER join C
on A.id=C.id;

select * from A
LEFT OUTER JOIN C
on A.id=C.id;

select * from A
RIGHT OUTER join c
on A.id=C.id;

select * FROM A
NATURAL join C;