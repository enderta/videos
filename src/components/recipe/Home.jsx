import React from 'react';
import LogOut from "./LogOut";

const Home = () => {
    const [recipes, setRecipes] = React.useState([]);
    const [search, setSearch] = React.useState('');
    React.useEffect(() => {
        fetch(`http://localhost:5000/recipe?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setRecipes(data)
            })
    }, [search])
    console.log(recipes)
    return (
        <div>

               <h1>
                   {<LogOut/>}
               </h1>
            <form>
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
            </form>
            <>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h1>{recipe.title}</h1>
                        <p>{recipe.description}</p>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.directions}</p>
                    </div>
                ))}
            </>


        </div>
    );
};

export default Home;