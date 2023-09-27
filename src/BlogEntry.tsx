

type BlogEntryProps = {
    title: string,
    content: string,
    myCallback: (info: string) => void
}

export default function BlogEntry(props: BlogEntryProps) {

    props.myCallback("Hallo ich bin die BlogEntry mein Blog Titel ist: " + props.title)


    return (
        <div>
            <h3>{props.title}</h3>
            <p>
                {props.content}
            </p>
        </div>
    )
}
