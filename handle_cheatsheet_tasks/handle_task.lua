local file = io.open("./cheatsheet_tasks/javascript.txt", "a+")
if file then
    local content = file:read("a")
    print(content)
end