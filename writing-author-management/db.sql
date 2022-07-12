create database topic_author;
use topic_author ;

create table topic(
	id int not null auto_increment,
	title varchar(30) not null,
	description text,
	created datetime not null,
	author_id int ,
	primary key(id)
)engine=InnoDB default charset='utf8';

create table author(
	id int not null auto_increment,
	name varchar(20) not null,
	profile varchar(200),
	primary key(id)
)engine=InnoDB default charset='utf8';

show tables;

insert into author(name, profile) values("eoghks", "admin");
insert into author(name, profile) values("somi", "user");
insert into author(name, profile) values("jisu", "user");

insert into topic(title, description, created, author_id) values("Nodejs", "Nodejs is...", NOW(), 2);
insert into topic(title, description, created, author_id) values("Mysql", "Mysql is...", NOW(), 1);
insert into topic(title, description, created, author_id) values("Web", "Web is...", NOW(), 3);


select * from author;
select * from topic;
