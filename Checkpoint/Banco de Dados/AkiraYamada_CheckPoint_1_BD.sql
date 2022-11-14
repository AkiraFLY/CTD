CREATE DATABASE gamesplan_dh;
USE gamesplan_dh;

create table planos_compra (
plano_id int not null auto_increment primary key,
plano_nome varchar (10),
plano_descricao varchar (255),
plano_duracao varchar (3),
plano_valor decimal (5,2)
);

create table usuarios (
usuario_id int not null auto_increment primary key,
usuario_nome varchar (30),
usuario_sobrenome varchar (50),
usuario_data_nascimento date,
usuario_email varchar (100),
usuario_nickname varchar (100),
usuario_senha varchar (20),
usuario_telefone char(14),
usuario_pais char (2),
usuario_plano_id int,
foreign key (usuario_plano_id)
	references planos_compra (plano_id)
);

create table cosmeticos(
cosmeticos_id int not null auto_increment primary key,
cosmeticos_nome varchar(100),
comesticos_descricao varchar(100),
cosmeticos_valor decimal (5,2)
);


create table compras(
compra_id int not null auto_increment primary key,
usuario_id int,
cosmeticos_id int,
plano_id int,
quantidade tinyint,
valor_total decimal (5,2),
foreign key (usuario_id)
	references usuarios (usuario_id),
foreign key (cosmeticos_id)
	references cosmeticos (cosmeticos_id),
foreign key (plano_id)
	references planos_compra (plano_id)
 );
 
 INSERT INTO planos_compra (plano_nome,plano_descricao,plano_duracao,plano_valor)
 VALUES ('Free', 'Plano gratuito; Mensalidade zero; Direito a 5% de XP durante as batalhas; Check-in mensal liberado; Pet gratuito durante 15 dias e uma skin comum durante 10 dias', '00D', '00.00'),
 ('Bronze', 'Direito a 10% de XP durante as batalhas; Check-in mensal liberado; Pet bronze incomum de 30 dias; Espada incomum da Lord Rai de 30 dias; Skin incomum de Lana de 30 dias; 20k diário e Kit couro incomum de 15 dias', '30D', '15.90'),
 ('Prata', 'Direito a 15% de XP durante as batalhas; Check-in diário liberado; Pet prata raro de 30 dias; Espada Rara da Lord Rai de 30 dias; Skin rara de Lana de 30 dias; 100k diário; Kit ferro de 30 dias; Caçador nível 15 durante 30 dias', '30D', '25.90'),
 ('Ouro', 'Direito a 35% de XP durante as batalhas; Pet gold épico de 30 dias; Espada Épica da Lord Rai de 30 dias; Skin Épica de Lana de 30 dias; 500k diário; Caçador nível 50 durante 30 dias; Recolor de skin durante 15 dias', '30D', '59.90'),
 ('Diamante', 'Direito a 60% de XP durante as batalhas; Pet diamante lendário de 30 dias; Espada Lendária da Lord Rai de 30 dias; 1kk diário; Caçador nível 150 durante 30 dias; Recolor de skin durante 30 dias; Mudança de nick (Introcável) e Personagem adicional (3)', '30D', '109.90')
;

select * from planos_compra;
 
 INSERT INTO usuarios (usuario_nome,usuario_sobrenome,usuario_data_nascimento,usuario_email,usuario_nickname,usuario_senha,usuario_telefone,usuario_pais,usuario_plano_id)
 values ('Gabriel','Suzano','1998-05-06','gsuzano@gmail.com','gasu','1234','(81)982056321','BR', '1'),
 ('Jonathan','Jailson','2000-06-08','jj2000@gmail.com','jj2000','1234','(11)915051389','BR', '5'),
 ('Patricia','Abavanel','2000-08-19','patricinhaAb@gmail.com','patricinha','1234','(31)985245263','BR', '1'),
 ('Cruella','Jr','2011-01-01','cruellaJr@gmail.com','cruella01','1234','351 920956755','PT', '3'),
 ('Akirinha','Yamada','1978-05-03','akyamada@gmail.com','ak47008','1234','(31)963353221','BR', '4');
 
 select * from usuarios;
 
 INSERT INTO cosmeticos (cosmeticos_nome,comesticos_descricao,cosmeticos_valor)
 VALUES ('Skin épica do lord Capim', 'Skin épica com duração de 15 dias, +10 força +20 agilidade', '15.99'),
('Pet lendário do Josephim Pietro', 'Pet lendário com duração de 45 dias, +45 força +60 agilidade +90 defesa', '100.00'),
('Skin épica da Senhorita Puff', 'Skin épica com duração de 30 dias, +15 força +30 agilidade +5 defesa','25.00'),
('Skin lendária do Aladin Dourado de Caerleon', 'Skin lendária com duração de 30 dias, +150 força','50.90');
 
 select * from cosmeticos;
