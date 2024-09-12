const InitialPoints = 0;
const InitialGoals = 0;
const defaultState = {
    count: 0,
    todolist: [
        "hello"
    ],
    menu_list: [
        {
            id: 1,
            title: "Rankings",
            href: "/rankings"
        },
        {
            id: 2,
            title: "Matches",
            href: "/matches"
        },
        {
            id: 3,
            title: "Achievement",
            href: "/achievement"
        },
        {
            id: 4,
            title: "Tournament",
            href: "/tournament"
        },
        {
            id: 5,
            title: "People",
            href: "/people"
        },
    ],
    selectedBoardIndex: 0,
    selectedBoardId: null,
    boardList: [],
    selectedTabIndex: 0,
    people: [
    ],
    matches: [
    ],
}


export default defaultState

export { InitialPoints, InitialGoals }