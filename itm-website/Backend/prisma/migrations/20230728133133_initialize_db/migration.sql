-- CreateTable
CREATE TABLE `session` (
    `id` INTEGER NOT NULL DEFAULT 0,
    `session` VARCHAR(191) NOT NULL,
    `expiration_time` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Produto` (
    `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id` VARCHAR(191) NULL,
    `imagem_grande` VARCHAR(191) NULL,
    `embalagem` VARCHAR(191) NULL DEFAULT '0',
    `token` VARCHAR(191) NULL,
    `peso_bruto` DOUBLE NULL DEFAULT 0,
    `imagem_pequena` VARCHAR(191) NULL,
    `embalagem_altura` DOUBLE NULL,
    `ncm` VARCHAR(191) NULL,
    `familia` VARCHAR(191) NULL,
    `codigo_barras` VARCHAR(191) NULL,
    `espaco_interno_altura` VARCHAR(191) NULL,
    `descricao` VARCHAR(191) NULL,
    `icms_descricao` VARCHAR(191) NULL,
    `ext` VARCHAR(191) NULL,
    `cnpj` VARCHAR(191) NULL,
    `embalagem_comprimento` DOUBLE NULL,
    `preco` DOUBLE NULL,
    `icms_identificador` VARCHAR(191) NULL,
    `origem_mercadoria` VARCHAR(191) NULL,
    `quantidade_temporaria` INTEGER NULL,
    `complemento` TEXT NULL,
    `imagem_media` VARCHAR(191) NULL,
    `imagem` VARCHAR(191) NULL,
    `quantidade` INTEGER NULL,
    `embalagem_largura` DOUBLE NULL,
    `quantidade_disponivel` INTEGER NULL,
    `referencia` VARCHAR(191) NULL,
    `peso_liquido` DOUBLE NULL,
    `espaco_interno_largura` VARCHAR(191) NULL,
    `codigo` VARCHAR(191) NULL,
    `situacao_tributaria` VARCHAR(191) NULL,
    `especificacao_tecnica` TEXT NULL,
    `fabricante` VARCHAR(191) NULL,
    `espaco_interno_comprimento` VARCHAR(191) NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
