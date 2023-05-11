export default function Home() {

    return (
        <main>
            <h1>Home Page</h1>
            {
                sessionStorage.setItem('username', 'raveenanair')
            }
        </main>
    );
}