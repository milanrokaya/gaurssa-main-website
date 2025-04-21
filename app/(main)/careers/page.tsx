import { ArrowDownIcon } from '@/assets/icons/ArrowDownIcon';
import { CategoryButton } from '@/components/shared/category-button/CategoryButton';
import { ScrollableHeader } from '@/components/shared/scrollable-header/ScrollableHeader';
import { Search } from '@/components/shared/search/Search';
import { CAREERS_CATEGORY } from '@/constants/careers/career';

const page = () => {
	return (
		<div>
			<section className="md:sticky top-0  lg:px-20 px-4 z-100 bg-neutral-50 py-4">
				<ScrollableHeader className="">
					<h1>Career</h1>
				</ScrollableHeader>
			</section>

			<section className="flex md:flex-row flex-col gap-4  justify-between md:items-center ">
				<div className=" w-full md:w-1/2  flex items-center justify-end  ">
					{CAREERS_CATEGORY.map((career) => (
						<CategoryButton key={career.id} label={career.label} />
					))}
				</div>
				<Search
					placeholder="Search Job"
					className="!rounded-full focus-within:"
				/>
			</section>

			<section>
				<div>
					<div>
						<h2 className="text-primary-600 text-h3">Software Engineer</h2>
						<ArrowDownIcon className="w-24 h-24 stroke-neutral-50" />
					</div>

					<ul>
						<li className=""></li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default page;
