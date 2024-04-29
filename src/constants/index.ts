import image1 from "/public/slides/image1.jpg"



export const Languages = [
    'English',
    'Spanish',
    'Hindi',
    'Arabic',
    'French',
    'Mandarin',
    'Russian'
]

export enum QUERY_PARAMS {
    search = "search",
    page = "page"
}

export const Slides = [
    image1
]

export const Visitors = [
    {
        timePeriod: "Yearly",
        Number_of_Viewers: 200
    },
    {
        timePeriod: "Monthly",
        Number_of_Viewers: 0
    },
    {
        timePeriod: "Weekly",
        Number_of_Viewers: 0
    },
    {
        timePeriod: "Daily",
        Number_of_Viewers: 0
    },
    {
        timePeriod: "Total",
        Number_of_Viewers: 20
    },
    {
        timePeriod: "Hourly",
        Number_of_Viewers: 5
    },
    {
        timePeriod: "Average Daily",
        Number_of_Viewers: 30
    },
    {
        timePeriod: "Average Hourly",
        Number_of_Viewers: 10
    }
]

export const PAGE_SIZE = 6

export const PAGE_NUMBERS = [
    1,2,3,4,5,6,'...',12
]