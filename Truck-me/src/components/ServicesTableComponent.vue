<template>
  <div class="servicos">
    <div class="text-servicos">
      <h1>Nossos Serviços</h1>
      <div class="linha-vermelha"></div>
    </div>
    <div class="card-table">
      <div class="table-wrapper">
        <table class="servicos-tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sem Burocracia</td>
              <td>Cuidamos de toda a burocracia, permitindo que você foque no que realmente importa: transportar.</td>
              <td>R$ 500,00</td>
            </tr>
            <tr>
              <td>Gerenciamento de Carga</td>
              <td>Simplificamos o gerenciamento de fretes, assegurando que suas cargas estejam nas melhores mãos.</td>
              <td>R$ 1000,00</td>
            </tr>
            <tr>
              <td>Ofertas</td>
              <td>Receba as melhores ofertas de cargas de maneira direta, sem intermediação, comissionamento ou taxas adicionais.</td>
              <td>R$ 300,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesTableComponent'
}
</script>

<style scoped>
.servicos {
  padding: 40px 20px;
  background-color:  white;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.text-servicos {
  margin-bottom: 50px;
}

.linha-vermelha {
  width: 100px;
  height: 4px;
  background-color: red;
  margin: 10px auto;
}

.card-table {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 1200px;
  width: 100%;
}

.table-wrapper {
  max-height: 400px;
  overflow-y: auto;
}

.servicos-tabela {
  width: 100%;
  border-collapse: collapse;
}

.servicos-tabela th, .servicos-tabela td {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  word-wrap: break-word;
}

.servicos-tabela th {
  background-color:  #fa4800;
  color: white;
}

.servicos-tabela td {
  background-color: white;
  color: #333;
}

.servicos-tabela tr:nth-child(even) {
  background-color: #f2f2f2;
}

.servicos-tabela tr:hover {
  background-color: #ddd;
}

@media (max-width: 750px) {
  .servicos {
      height: auto;
  }

  .table-wrapper {
      max-height: 300px;
  }
}
</style>
