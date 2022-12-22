import Style from "../../styles/SearchForm.module.css"

const SearchForm = ({searchPlace}) => {
    return (
        <form onSubmit={searchPlace} className={Style.form}>
            <input name="country" type="text" placeholder="País" />
            <input name="state" type="text" placeholder="Estado" />
            <input name="city" type="text" placeholder="Cidade" />
            <button>Pesquisar</button>
        </form>
    );
}

export default SearchForm;