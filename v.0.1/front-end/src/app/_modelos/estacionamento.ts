export class Estacionamento {
    id: string;
    proprietario: string;
    nome_fantasia: string;
    cnpj: string;
    endereco: [{ rua: string, bairro: string, numero: number }];
    servicos: [{nome:string}];
    situacao: boolean;
    localizacao:[{lat: number, lng: number;}];
    funcionarios: [{id_funcionario:string}];
    criada_em: string ;    
}
