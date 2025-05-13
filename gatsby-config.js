module.exports = {
    siteMetadata: {
        siteUrl: "https://www.bhawesh.netlify.app",
        title: "Bhawesh Sharma",
        description: "Bhawesh Sharma a professional web developer",
        author: "Bhawesh Sharma",
        siteLanguage: "en",
        image: "banner.jpg",
        twitterUsername: "@bhawesh18",
        getform_url:
            "https://getform.io/f/4b8b0d64-aa13-4618-8ab2-19450a43a829",
        socials: [
            {
                id: 1,
                title: "facebook",
                path: "https://www.facebook.com/bikku.sharma",
                icon: "Facebook",
            },
            {
                id: 2,
                title: "instagram",
                path: "https://www.instagram.com/bhaweshsharma_/",
                icon: "Instagram",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://linkedin.com/in/bhaweshsharma",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "917742261033",
            email: "sharma2001bhawesh@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
