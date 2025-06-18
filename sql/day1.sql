-- 단문 주석
/*
복문 주석

DB => SQL (Structured Query Language) => DB 언어의 표준 

DDL(Data Definition Language) create, drop, alter...
DML(Data Manipulation Language) insert, delete, update...
DQL(Data Query Language) select
TCL(Transaction Control Language) commit, rollback...

insert into 테이블명(컬럼명1, 컬럼명2, ...)
values(값1, 값2, ...)
varchar, char, text, ... 홑따옴표로 감싸서 값을 넣어야한다. ex) '값'

*/

insert into members(name, email, password, role)
values('박제한', 'pjh@gmail.com', '1234', 'USER'),
('송채영', 'songchae@gmail.com', '1234', 'ADMIN'),
('정보경', 'bbo@gmail.com', '1234', 'USER'),
('박예림', 'yerrim@gmail.com', '1234', 'USER'),
('해오름', 'ryry@gmail.com', '1234', 'USER');

-- order by 컬럼명 asc | desc

select id, name, role from members order by name asc;
select * from members where email like '%.com%' order by created_at desc;
select * from members order by role asc, created_at desc;

select * from members order by created_at asc limit 2;

-- 전체회원수 집계
select count(id) from members;
-- 행 개수를 카운팅 
select count(*) from members; 

-- update 테이블 명 set 컬럼1 = 값1, 컬럼2 = 값2
-- where 조건이 원래 생략가능한데, mysql 워크벤치에서는 필수로 나옴.

select * from members;

update members 
set name = '피카츄', email='pokemon@co.kr'
where id=2;

select * from members;

update members set email = 'boon10034@gmail.com' where id = 3;

delete from members where id = 5;
select * from members;

create table if not exists posts(
id int auto_increment primary key,
author int not null,
foreign key(author) references members(id),
title varchar(200) not null,
content text not null,
attach varchar(255),
created_at datetime default current_timestamp
);

create table if not exists replies(
id int auto_increment primary key,
post_id int not null,
foreign key(post_id) references posts(id),
content varchar(45) not null,
created_at datetime default current_timestamp
);

desc posts;
show tables;

desc posts;

-- 1. 외래키 삭제
ALTER TABLE replies
DROP FOREIGN KEY replies_ibfk_1;

-- 2. 외래키 재생성 (옵션 포함)
ALTER TABLE replies
ADD CONSTRAINT replies_ibfk_1
FOREIGN KEY (post_id)
REFERENCES posts(id)
ON DELETE CASCADE;

-- 3. 현재 외래키 제약 조건 이름 확인하기 

SELECT
  CONSTRAINT_NAME
FROM
  information_schema.KEY_COLUMN_USAGE
WHERE
  TABLE_NAME = 'replies' AND
  CONSTRAINT_SCHEMA = DATABASE() AND
  REFERENCED_TABLE_NAME IS NOT NULL;

desc posts;


insert into posts(author, title, content)
values(1, '첫번째 게시글', '테스트입니다'),
(1, '공지사항', 'Admin이 공지사항 테스트중입니다.'),
(1, '신기', '테스트 재밌다');

-- 2개 이상의 테이블을 합쳐서 1개의 테이블 처럼 보여주기 

select m.name, m.email, p.author, p.title, p.created_at, p.id as '글 번호'
from members m join posts p 
on m.id = p.author 
order by p.id desc;

-- 중복된 데이터가 있으면 한번만 출력
select distinct password from members;

select count(id) from posts;

-- 회원 별 게시글 수 
-- group by에 의해 select할 수 잇는 컬럼은 group by절에 사용된 컬럼만 가져올 수 있음.
select author, count(id) from posts 
group by author
having count(id) >= 3;

-- 게시글 수가 3개 이상되는 작성자만 조회 
-- group by에 조건을 부여할 때 having을 사용한다. 


