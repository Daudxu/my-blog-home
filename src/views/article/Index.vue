
<template>
    <div class="flex justify-center">
        <div class="w-[1024px] h-screen mx-auto">
            <div class="my-20 rounded-xl shadow-xl p-5 bg-slate-50 dark:bg-slate-600 space-y-3">
              
                <div class="mx-auto">
                    <div class="flex items-center space-x-4 mb-4 max-w-md">
                        <input type="text" class="px-2 py-1 border rounded-lg w-full" placeholder="Search...">
                        <select class="px-2 py-1 border rounded-lg">
                            <option value="all">All</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                            <option value="category3">Category 3</option>
                        </select>
                    </div>
                    <ul class="space-y-4">
                        <li class="border p-4 rounded-lg" v-for="n in 13" key="n">
                        <h3 class="text-xl font-semibold mb-2">Item 1</h3>
                        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <span class="text-blue-500 hover:underline cursor-pointer">Read more</span>
                        </li>
              
                    </ul>
                </div>

            
              </div>
        </div>
    </div>
</template>