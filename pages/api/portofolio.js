// app/api/portfolio/route.js
import portfolioData from '../../../public/json/portofolio.json';

export async function GET() {
    try {
        return Response.json(portfolioData);
    } catch (error) {
        return Response.json(
            { message: 'Error reading portfolio data' },
            { status: 500 }
        );
    }
}