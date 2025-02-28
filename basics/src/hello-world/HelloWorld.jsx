import "./HelloWorld.css"

export default function HelloWorld() {
    const props = {
        text: "Hello World",
    }

    return (
        <>
            <Header {...props} />
            <Content content="Selamat datang di dunia React" />
        </>
    )
}

function Header({ text = "Masukin lah valuenya masa pake default" }) {
    return (
        <header>
            <h1 className="title">{text.toUpperCase()}</h1>
        </header>
    )
}

function Content(props) {
    // const style = { color: "blue", backgroundColor: "yellow" }
    const { content } = props

    return (
        <section>
            <p className="content">{content.toLowerCase()}</p>
        </section>
    )
}
