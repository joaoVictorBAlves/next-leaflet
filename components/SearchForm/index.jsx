import Style from "../../styles/SearchForm.module.css"

const SearchForm = () => {
    return (
        <form className={Style.form}>
            <label htmlFor="country">País:</label>
            <input type="text" />
            <label htmlFor="state">Estado:</label>
            <input type="text" />
            <label htmlFor="city">Cidade:</label>
            <input type="text" />
            <label htmlFor="street">Rua:</label>
            <input type="text" />
            <button>Pesquisar</button>
        </form>
    );
}

export default SearchForm;