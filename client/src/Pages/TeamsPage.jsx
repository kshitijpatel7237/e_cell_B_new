import React from "react";
import Card from "./Card.jsx";

function TeamsPage() {
	return (
		<div class="bg-custom-primary">
			<div class="items-column p-8 space-y-6 flex flex-col items-center">
				<div>
					<h1 class="text-2xl md:text-4xl text-white font-semibold">Top 10 author of the month</h1>
				</div>

				<div>
					<h1 class="text-2xl text-white">Rating based on customer reviews</h1>
				</div >
			</div>
			<div class="flex flex-wrap m-3 gap-y-10">
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-1.90baa8cc.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-2.405c62ff.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-3.f257bc3c.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-4.36899b28.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-6.f9fbe706.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-7.c8858391.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-8.5ae85a64.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-9.d879028d.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-10.93048ca7.png" name="Kevin Francis"></Card>
				<Card imgUrl="https://chisnghiax.com/chisfis/static/media/Image-5.b1088376.png" name="Kevin Francis"></Card>
			</div>
			<div class="space-x-8 flex flex-wrap mr-6 lg:pl-96 md:pl-40  gap-y-10 pb-4">

				<button class="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 lg:px-4 sm:px-3 rounded-full">
					Show me more
				</button>
				<button class="bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4  sm:px-2 rounded-full">
					Become a host
				</button>
			</div>
		</div>

	)
}

export default TeamsPage;