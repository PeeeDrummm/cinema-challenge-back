# Histórias de Usuário do Cinema App

## Introdução
Este documento contém histórias de usuário principais para a aplicação Cinema App, focando nas funcionalidades implementadas para testes.

## Papéis de Usuário
- **Visitante**: Usuário não autenticado
- **Usuário**: Usuário regular autenticado
- **Administrador**: Usuário com privilégios administrativos

## Histórias de Autenticação

### US-AUTH-001: Registro de Usuário
**Como** visitante  
**Eu quero** registrar uma nova conta  
**Para que** eu possa reservar ingressos de cinema  

**Critérios de Aceitação:**
- Usuário pode inserir nome, e-mail e senha
- Sistema valida o formato do e-mail e senha
- Sistema impede registros de e-mails duplicados
- Após o registro bem-sucedido, o usuário é redirecionado para a página de login, autenticado

### US-AUTH-002: Login de Usuário
**Como** usuário registrado  
**Eu quero** fazer login na minha conta  
**Para que** eu possa acessar recursos personalizados  

**Critérios de Aceitação:**
- Usuário pode inserir e-mail e senha
- Sistema autentica credenciais válidas
- Sistema mantém sessão do usuário através de token JWT
- Usuário é redirecionado para a página inicial após login bem-sucedido

### US-AUTH-003: Logout de Usuário
**Como** usuário logado  
**Eu quero** sair da minha conta  
**Para que** minha sessão seja encerrada  

**Critérios de Aceitação:**
- Usuário pode fazer logout através do menu de navegação
- Após o logout, rotas protegidas não são mais acessíveis
- Token JWT é removido do localStorage

### US-AUTH-004: Visualizar Perfil do Usuário
**Como** usuário logado  
**Eu quero** visualizar minhas informações de perfil  
**Para que** eu possa verificar os detalhes da minha conta  

**Critérios de Aceitação:**
- Perfil exibe nome do usuário, e-mail e função da conta
- Opção para editar perfil está disponível

## Histórias de Gerenciamento de Filmes

### US-MOVIE-001: Navegar na Lista de Filmes
**Como** usuário (visitante ou autenticado)  
**Eu quero** navegar pelos filmes disponíveis  
**Para que** eu possa descobrir filmes para assistir  

**Critérios de Aceitação:**
- Usuário pode visualizar uma lista dos filmes em exibição
- Filmes são exibidos com pôster, título e dados básicos
- Usuário consegue acessar detalhes do filme com um clique

### US-MOVIE-002: Visualizar Detalhes do Filme
**Como** usuário (visitante ou autenticado)  
**Eu quero** visualizar informações detalhadas sobre um filme  
**Para que** eu possa decidir se quero assisti-lo  

**Critérios de Aceitação:**
- Detalhes incluem sinopse, elenco, diretor, data de lançamento, duração
- Página de detalhes mostra pôster do filme
- Página exibe horários de sessões disponíveis
- Usuário pode navegar para a reserva a partir dos horários disponíveis

## Histórias de Gerenciamento de Sessões

### US-SESSION-001: Visualizar Horários de Sessões
**Como** usuário (visitante ou autenticado)  
**Eu quero** visualizar horários para um filme específico  
**Para que** eu possa planejar quando assisti-lo  

**Critérios de Aceitação:**
- Usuário pode ver horários disponíveis para um filme selecionado
- Horários exibem data, hora, teatro e disponibilidade
- Usuário pode navegar para a seleção de assentos de um horário

## Histórias de Reserva

### US-RESERVE-001: Selecionar Assentos para Reserva
**Como** usuário logado  
**Eu quero** selecionar assentos para uma sessão de filme  
**Para que** eu possa reservar minha localização preferida  

**Critérios de Aceitação:**
- Usuário pode visualizar o layout de assentos do teatro
- Assentos são codificados por cores conforme disponibilidade
- Usuário pode selecionar múltiplos assentos disponíveis
- Usuário não pode selecionar assentos já reservados
- Sistema mostra o subtotal à medida que os assentos são selecionados

### US-RESERVE-002: Completar Reserva
**Como** usuário logado  
**Eu quero** confirmar minha seleção de assentos  
**Para que** eu possa finalizar minha reserva  

**Critérios de Aceitação:**
- Usuário pode revisar assentos selecionados antes de confirmar
- Sistema calcula o total correto com base nos tipos de assentos
- Sistema confirma reserva bem-sucedida
- Assentos selecionados são marcados como ocupados

### US-RESERVE-003: Visualizar Minhas Reservas
**Como** usuário logado  
**Eu quero** visualizar meu histórico de reservas  
**Para que** eu possa verificar minhas reservas  

**Critérios de Aceitação:**
- Usuário pode acessar lista de suas reservas
- Reservas exibem filme, data, horário, teatro, assentos e status
- Usuário pode visualizar detalhes completos de cada reserva

## Histórias de API e Sistema

### US-API-001: Autenticação da API
**Como** desenvolvedor  
**Eu quero** autenticar com a API  
**Para que** eu possa acessar endpoints protegidos  

**Critérios de Aceitação:**
- API fornece autenticação baseada em JWT
- API impõe autorização adequada para rotas protegidas
- Requisições com tokens inválidos são rejeitadas
- API fornece endpoint seguro para login e obtenção de token

---
