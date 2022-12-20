import Style from "../../styles/SearchForm.module.css"

const SearchForm = ({handleForm}) => {
    return (
        <form onSubmit={handleForm} className={Style.form}>
            <input name="country" type="text" placeholder="País" />
            <input name="state" type="text" placeholder="Estado" />
            <input name="city" type="text" placeholder="Cidade" />
            <input name="street" type="text" placeholder="Rua" />
            <button>Pesquisar</button>
        </form>
    );
}

export default SearchForm;