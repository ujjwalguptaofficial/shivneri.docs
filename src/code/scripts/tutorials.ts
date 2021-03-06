import { TreeViewItem } from "../models/treeview_item";

export const tutorialLinks = [
    {
        id: 1,
        url: "get-started",
        text: "Get Started"
    },
    {
        id: 2,
        url: "controller",
        text: "Controller"
    },
    {
        id: 3,
        url: "worker",
        text: "Worker"
    },
    {
        id: 4,
        text: 'Route',
        url: 'route'
    }, {
        id: "result",
        text: 'Result',
        url: 'result'
    },
    // {
    //     id: 5,
    //     text: 'Bootstrap',
    //     url: 'bootstrap'
    // }, {
    //     id: 7,
    //     text: "View",
    //     url: "view"
    // }, {
    //     id: "validation",
    //     text: "Validation",
    //     url: "validation"
    // }, 
    {
        id: 8,
        text: "Authentication",
        url: "authentication"
    },
    {
        id: 9,
        text: "Logger",
        url: "logger"
    },

    // {
    //     id: "middleware",
    //     text: "Middleware",
    //     url: "middleware"
    // },
    {
        id: 10,
        text: "Component",
        url: "component",
        childs: [
            {
                id: 1,
                text: "Wall",
                url: "component/wall"
            },
            {
                id: 2,
                text: "Shield",
                url: "component/shield"
            },
            {
                id: 3,
                text: "Guard",
                url: "component/guard"
            }
        ]
    },
    // {
    //     id: "decorator",
    //     text: "Decorators",
    //     url: "decorator",
    //     childs: [{
    //         id: "expect_body",
    //         url: "decorator/expect-body",
    //         text: "ExpectBody"
    //     }, {
    //         id: "expect_query",
    //         url: "decorator/expect-query",
    //         text: "ExpectQuery"
    //     }]
    // },
    {
        id: "websocket",
        text: "Websocket",
        url: "websocket",
        childs: [{
            id: "controller",
            text: "WebSocketController",
            url: "websocket/controller"
        },
        {
            id: "clients",
            text: "Clients",
            url: "websocket/clients"
        }, {
            id: "groups",
            url: "websocket/groups",
            text: "Groups"
        }]
    },
    {
        id: 11,
        text: "Concepts",
        url: "null",
        childs: [
            //     {
            //     id: 1,
            //     text: "Cookie",
            //     url: "cookie"
            // }, 
            {
                id: 2,
                text: "Session",
                url: "session"
            },
            {
                id: 3,
                text: "Component Data",
                url: "component-data"
            },
            {
                id: 4,
                text: "Route Param",
                url: "param"
            },
            {
                id: 5,
                text: "Query String",
                url: "query"
            },
            {
                id: 6,
                text: "Post Data",
                url: "body"
            },
            {
                id: 7,
                text: "File upload",
                url: "file"
            },
            {
                id: "file_server",
                text: "File server",
                url: "file-server"
            },
            // {
            //     id: 8,
            //     text: "Dependency Injection",
            //     url: "dependency-injection"
            // }
        ]
    },
    // {
    //     id: 12,
    //     text: "Types",
    //     url: "null",
    //     childs: [{
    //         id: 1,
    //         text: "HttpResult",
    //         url: "type/http-result"
    //     }, {
    //         id: 2,
    //         text: "AppOption",
    //         url: "type/app-option"
    //     }, {
    //         id: 3,
    //         text: "HttpRequest",
    //         url: "type/http-request"
    //     }, {
    //         id: 4,
    //         text: "HttpResponse",
    //         url: "type/http-response"
    //     }, {
    //         id: 5,
    //         text: "ViewEngineData",
    //         url: "type/view-engine-data"
    //     }, {
    //         id: 6,
    //         text: "HttpFormatResult",
    //         url: "type/http-format-result"
    //     }]
    // }, {
    //     id: 13,
    //     text: "Advanced",
    //     url: "null",
    //     childs: [{
    //         id: 1,
    //         text: "Custom Error Handler",
    //         url: "custom-error-handler"
    //     }, {
    //         id: 2,
    //         text: "Session Provider",
    //         url: "session-provider"
    //     }, {
    //         id: 3,
    //         text: "Format Response",
    //         url: "format-response"
    //     }, {
    //         id: 4,
    //         text: "View Engine",
    //         url: "view-engine"
    //     },
    //     {
    //         id: 6,
    //         text: "GraphQl",
    //         url: "graphql"
    //     }, {
    //         id: 7,
    //         text: "Socket.io",
    //         url: "socket-io"
    //     }],
    // },
    // {
    //     id: 14,
    //     text: "Swagger / Open API",
    //     url: "swagger",
    //     childs: [{
    //         id: 1,
    //         text: "Initiate",
    //         url: "swagger/initiate"
    //     }, {
    //         id: 2,
    //         text: "Swagger Model",
    //         url: "swagger/model"
    //     }]
    // },
    // {
    //     id: 15,
    //     text: "Deployment",
    //     url: "deployment"
    // },
    // {
    //     id: 16,
    //     text: "Test",
    //     url: "test",
    //     childs: [
    //         {
    //             id: "unit_test",
    //             text: "Unit Test",
    //             url: "test/unit-test"
    //         },
    //         {
    //             id: "e2e_test",
    //             text: "e2e Test",
    //             url: "test/e2e-test"
    //         },
    //         {
    //             id: "initialize",
    //             text: "Initialize controller",
    //             url: "test/initialize"
    //         }
    //     ]
    // }
] as TreeViewItem[];