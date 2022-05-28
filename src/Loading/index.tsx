import { Box, CircularProgress, CircularProgressProps, Dialog, DialogContent } from "@mui/material";
import { FC, useState } from "react";

interface LoadingProps extends CircularProgressProps {
}
const Loading: FC<LoadingProps> = (props) => {
    return (
        <Box
            width="100%"
            display="flex"
            justifyContent="center"
            my={3}
        >
            <CircularProgress {...props} />
        </Box>
    );
}

export default Loading;

type LoadableComponent<Props> = FC<Props & {
    startLoad: () => void,
    endLoad: () => void,
    loading: boolean,
}>
export const Loadable = <Props,>(Comp: LoadableComponent<Props>) => {
    const Component: FC<Props> = (props) => {
        const [loading, setLoading] = useState(false)
        const startLoad = () => { setLoading(true) }
        const endLoad = () => { setLoading(false) }
        return (
            <>
                <Comp
                    loading={loading}
                    startLoad={startLoad}
                    endLoad={endLoad}
                    {...props}
                />
                <Dialog open={loading}>
                    <DialogContent>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <CircularProgress />
                        </Box>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
    return Component;
}
