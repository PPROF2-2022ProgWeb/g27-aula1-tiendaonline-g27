export interface IDashboardReports {
    sales: {
        today: {
            quantity: number;
            percentage_change: number;
        };
        this_month: {
            quantity: number;
            percentage_change: number;
        };
        this_year: {
            quantity: number;
            percentage_change: number
        };
        recent_sales:
        {
            id: number;
            product_id: number;
            product_name: string;
            price: number;
            customer: string;
            thumb: string
        }[];
        top_selling: {
            position: number;
            product_id: number;
            product_name: string;
            price: number;
            sold: number;
            revenue: number;
            thumb: string;
        }[]
    };
    revenue: {
        today: {
            quantity: number;
            percentage_change: number
        };
        this_month: {
            quantity: number;
            percentage_change: number
        };
        this_year: {
            quantity: number;
            percentage_change: number
        }
    };
    customers: {
        today: {
            quantity: number;
            percentage_change: number
        };
        this_month: {
            quantity: number;
            percentage_change: number
        };
        this_year: {
            quantity: number;
            percentage_change: number
        }
    };
    activity: {};
    budget: {};
    website_traffic: {};
}