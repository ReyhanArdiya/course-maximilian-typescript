import axios from "axios";

// Code goes here!
const form = document.querySelector("form") as HTMLFormElement;
const addressInp = document.querySelector("#address") as HTMLInputElement;

interface GeocodeResponse {
	results: {
		geometry: {
			location: {
				lat: number;
				lng: number;
			};
		};
	}[];
	status: "OK" | "ZERO_RESULTS";
}

declare const google: any;

declare global {
			interface Window {
				initMap: () => void;
			}
		}

const searchAddress = async (e: Event) => {
	e.preventDefault();
	try {
		const address = addressInp.value.trim();

		const { data } = await axios.get<GeocodeResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				address
			)}&key=${mapKey}`
		);

		const {
			results: [
				{
					geometry: {
						location: { lat, lng }
					}
				}
			],
			status
		} = data;

		if (status !== "OK") {
			throw new Error("Sumn went wrong baeb");
        }

        //@ts-ignore
		let map;

		function initMap(): void {
			map = new google.maps.Map(
				document.getElementById("map") as HTMLElement,
				{
					center: { lat, lng },
					zoom: 40
				}
			);
		}

        window.initMap = initMap;
        initMap();

	} catch (err) {
		console.log(err);
	}
};

form.addEventListener("submit", searchAddress);
