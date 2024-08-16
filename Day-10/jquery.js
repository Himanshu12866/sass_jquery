$(() => {



    $("#grid").jsGrid({
        width: "100%",
        height: "400px",
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        // align: "center",
        data: [
            {
                snumber: 1,
                name: "John Doe",
                age: 25

            },
            {
                snumber: 2,
                name: "Raju Bhai",
                age: 50

            },
            {
                snumber: 3,
                name: "Tiger Bhai",
                age: 100

            },
            {
                snumber: 4,
                name: " R O L E X",
                age: 250

            }
        ],


        fields: [
            {
                name: "snumber", type: "number", validate: "required"
            },
            {
                name: "name", type: "text", validate: "required"
            },
            {
                name: "age", type: "number"
            },
            {
                type: "control"
            }

        ]


    })
})