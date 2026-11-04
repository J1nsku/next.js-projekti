const goals = [
    { id: 1, content: 'Visit Japan', url: '/images/japan.jpg' },
    { id: 2, content: 'Read 20 books', url: '/images/book.jpg'}
]

let nextId = 3

export const getGoals = () => {
    return goals
}

export const addGoal = (content: string, url: string) => {
    goals.push({ id: nextId++, content, url })
}

export const getGoalById = (id: number) => {
    return goals.find((goal) => goal.id === id)
}

export const toggleImportance = (id: number) => {
    const goal = goals.find((goal) => goal.id === id)
}