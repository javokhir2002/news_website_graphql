create database newswebsite;

create table users(
    user_id int generated always as identity primary key,
    first_name varchar(30),
    last_name varchar(30),
    email text, 
    pass_word text, 
    specialist varchar(30)
);

create table languages(
    lang_id int generated always as identity primary key,
    lang_name varchar(30)
);

create table categories(
    category_id int generated always as identity primary key,
    category_name text,
    lang_id int not null references languages (lang_id) on delete cascade
);

create table news (
    news_id int generated always as identity primary key,
    news_title text,
    news_body text,
    news_time timestamptz default current_timestamp, 
    news_views int,
    lang_id int not null references languages (lang_id) on delete cascade, 
    author_id int not null references users (user_id) on delete cascade,
    category_id int not null references categories (category_id) on delete cascade
);
