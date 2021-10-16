const index = require("./index")
// @ponicode
describe("index.fetchPostsAndUsers", () => {
    test("0", () => {
        let callFunction = () => {
            index.fetchPostsAndUsers()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.fetchPosts", () => {
    test("0", () => {
        let callFunction = () => {
            index.fetchPosts()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.fetchUser", () => {
    test("0", () => {
        let callFunction = () => {
            index.fetchUser(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.fetchUser("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.fetchUser(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.fetchUser("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.fetchUser(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.fetchUser(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
