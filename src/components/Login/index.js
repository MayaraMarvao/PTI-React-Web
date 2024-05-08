import './index.css';

export default function Logar(){
    return(
        <div className='component-login'>
            <form>
                <h2>Quer criar uma conta?</h2>
                <label for="username">Username:</label> <br/>
                <input type="text" id="username" name="username" required /><br/>
                <label for="password">Password:</label><br/>
                <input type="password" id="password" name="password" required /><br/>
                <input className='botao' type="submit" value="Login" />
            </form>
            
        </div>
    )
}