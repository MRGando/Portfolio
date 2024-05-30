import data from '../../Data/info.json';

export async function GET(request) {
    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json"
        }
    });

}