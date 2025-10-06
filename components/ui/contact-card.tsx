import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'relative grid h-full w-full bg-white border-2 border-[#ec6fea] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden md:grid-cols-2 lg:grid-cols-3',
				className,
			)}
			{...props}
		>
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-4 px-5 py-8 md:p-8">
					<h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#b300a5] to-[#d946ef]">
						{title}
					</h1>
					<p className="max-w-xl text-sm md:text-base lg:text-lg text-neutral-700">
						{description}
					</p>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'flex h-full w-full items-center bg-white border-t p-5 md:col-span-1 md:border-t-0 md:border-l md:border-neutral-200',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-start gap-3 py-3', className)} {...props}>
			<div className="rounded-lg p-3 bg-[#ec6fea]/15 border border-[#ec6fea]/30">
				<Icon className="h-5 w-5 text-[#b300a5]" />
			</div>
			<div className="min-w-0">
				<p className="font-medium text-neutral-900">{label}</p>
				<p className="text-xs text-neutral-600 whitespace-normal break-words leading-snug">{value}</p>
			</div>
		</div>
	);
}

