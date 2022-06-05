CREATE TABLE IF NOT EXISTS accounts(
    id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    name varchar(255) COMMENT 'User Name',
    email varchar(255) COMMENT 'User Email',
    picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';

CREATE TABLE IF NOT EXISTS profiles(
    id VARCHAR(255) NOT NULL primary key COMMENT 'primary key',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    name varchar(255) COMMENT 'User Name',
   
    picture varchar(255) COMMENT 'User Picture'
) default charset utf8 COMMENT '';

CREATE TABLE IF NOT EXISTS keeps(
    id int NOT NULL AUTO_INCREMENT primary key,
    creatorId VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    description TEXT,
    img VARCHAR(255) NOT NULL,
    views int NOT NULL DEFAULT 0,
    kept int NOT NULL DEFAULT 0,
    shares int DEFAULT 0,
    FOREIGN KEY (creatorId) REFERENCES profiles(id) ON DELETE CASCADE
) default charset utf8 COMMENT '';

CREATE TABLE IF NOT EXISTS vaults(
    id int NOT NULL AUTO_INCREMENT primary key,
    creatorId VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    description TEXT,
    isPrivate TINYINT DEFAULT 0,
    FOREIGN KEY (creatorId) REFERENCES profiles(id) ON DELETE CASCADE
) default charset utf8 COMMENT '';

CREATE TABLE IF NOT EXISTS vaultKeeps(
    id int NOT NULL AUTO_INCREMENT primary key,
    creatorId VARCHAR(255) NOT NULL,
    vaultId int NOT NULL,
    keepId int NOT NULL,
    FOREIGN KEY (creatorId) REFERENCES profiles(id) ON DELETE CASCADE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Time Created',
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Last Update',
    FOREIGN KEY (vaultId) REFERENCES vaults(id) ON DELETE CASCADE,
    FOREIGN KEY (keepId) REFERENCES keeps(id) ON DELETE CASCADE
) default charset utf8 COMMENT '';