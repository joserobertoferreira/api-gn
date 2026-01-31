import sql from 'mssql';

// ⚠️ PREENCHE ESTES DADOS MANUALMENTE
// Não uses process.env aqui para termos a certeza absoluta dos valores
const config = {
  server: '192.168.1.249\\SAGEX3', // Se for docker ou local. Se for remoto, põe o IP.
  port: 1433, // A porta padrão
  database: 'x3v12db', // O nome exato do banco
  user: 'TGN', // Ex: sa
  password: 'on-2018', // A tua senha
  options: {
    encrypt: true, // Geralmente true para SQL Server recente
    trustServerCertificate: true, // IMPORTANTE: Aceita certificados auto-assinados (dev)
  },
};

async function testarConexao() {
  console.log('🔌 Tentando conectar ao:', config.server);
  console.log('📂 Banco:', config.database);
  console.log('👤 Usuário:', config.user);

  try {
    // Conecta usando o objeto de configuração explícito
    const pool = await sql.connect(config);

    console.log('\n✅ SUCESSO! A conexão funciona.');

    // Teste final: Uma query simples
    const result = await pool.query`SELECT @@VERSION as versao`;
    console.log('📊 Versão do Banco:', result.recordset[0].versao);

    await pool.close();
    process.exit(0);
  } catch (err: any) {
    console.error('\n❌ ERRO FATAL DE CONEXÃO:');
    console.error('--------------------------');
    console.error('Mensagem:', err.message);

    // Ajuda no diagnóstico
    if (err.code === 'ESOCKET') {
      console.error(
        '👉 O servidor não foi encontrado. Verifica se o SQL Server está a rodar e se o host/porta estão corretos.',
      );
    } else if (err.code === 'ELOGIN') {
      console.error('👉 Usuário ou senha incorretos.');
    }

    process.exit(1);
  }
}

testarConexao();
