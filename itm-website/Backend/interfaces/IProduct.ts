interface IProducts {
    product_id: number;
    id?: string | null;
    imagem_grande?: string | null;
    embalagem?: string | null;
    token?: string | null;
    peso_bruto?: number | null;
    imagem_pequena?: string | null;
    embalagem_altura?: number | null;
    ncm?: string | null;
    familia?: string | null;
    codigo_barras?: string | null;
    espaco_interno_altura?: string | null;
    descricao?: string | null;
    icms_descricao?: string | null;
    ext?: string | null;
    cnpj?: string | null;
    embalagem_comprimento?: number | null;
    preco?: number | null;
    icms_identificador?: string | null;
    origem_mercadoria?: string | null;
    quantidade_temporaria?: number | null;
    complemento?: string | null;
    imagem_media?: string | null;
    imagem?: string | null;
    quantidade?: number | null;
    embalagem_largura?: number | null;
    quantidade_disponivel?: number | null;
    referencia?: string | null;
    peso_liquido?: number | null;
    espaco_interno_largura?: string | null;
    codigo?: string | null;
    situacao_tributaria?: string | null;
    especificacao_tecnica?: string | null;
    fabricante?: string | null;
    espaco_interno_comprimento?: string | null;
  }
  
  export default IProducts