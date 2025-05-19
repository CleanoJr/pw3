import React from 'react';

const SideBar = ({ setCurrentPage }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Menu</h2>
            </div>
            <div className="sidebar-content">
                <ul className="sidebar-menu">
                    <li onClick={() => setCurrentPage('clientes')}>Cadastro de Cliente</li>
                    <li onClick={() => setCurrentPage('produtos')}>Cadastro de Produtos</li>
                    <li onClick={() => setCurrentPage('servicos')}>Cadastro de Serviços</li>
                    <li onClick={() => setCurrentPage('about')}>Sobre</li>
                    <li onClick={() => setCurrentPage('contact')}>Contato</li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar