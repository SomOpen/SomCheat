import cheatsheet_data from "../data/cheatsheet_data"

export default function CheatSheet() {
    return (
        <div>
            {
                cheatsheet_data ?
                cheatsheet_data.map((cheatSheet, id) => (
                    <div key={id}>
                        {cheatSheet.icon}
                    </div>
                ))
                 : null
            }
        </div>
    )
}  