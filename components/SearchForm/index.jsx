import Style from "../../styles/SearchForm.module.css"

const SearchForm = () => {
    return (
        <form method="POST" action="/api/search" className={Style.form}>
            <label htmlFor="country">País:</label>
            <input name="country" type="text" />
            <label htmlFor="state">Estado:</label>
            <input name="state" type="text" />
            <label htmlFor="city">Cidade:</label>
            <input name="city" type="text" />
            <label htmlFor="street">Rua:</label>
            <input name="street" type="text" />
            <button>Pesquisar</button>
        </form>
    );
}

export default SearchForm;